import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

import Header from "../components/Header";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

import eboardBanner from "../assets/banners/eboardbanner.jpeg";
import "./EBoard.css";

/**
 * Single E-Board member card.
 * - Square image on the left (cover)
 * - Right side has name + position, with intro below
 */
const EBoarderCard = ({ fullName, position, introduction, photoUrl }) => {
  return (
    <article className="eboarder-card">
      <div className="eboarder-photo-wrap">
        {/* photoUrl comes directly from Firebase Storage */}
        <img
          src={photoUrl}
          alt={`${fullName} headshot`}
          className="eboarder-photo"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="eboarder-content">
        <div className="eboarder-header">
          <h3 className="eboarder-name">{fullName}</h3>
          <span className="eboarder-position">{position}</span>
        </div>
        {introduction && (
          <p className="eboarder-intro">{introduction}</p>
        )}
      </div>
    </article>
  );
};

const EBoardPage = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Optional: define an ordering for positions if you’d like a consistent display
  // Otherwise, we’ll fall back to alphabetical by fullName.
  const POSITION_ORDER = [
    "President",
    "Vice President",
    "Treasurer",
    "Secretary",
    "Trip Lead",
    "Training Lead",
    "Social Chair",
    "Marketing",
    "Outreach",
  ];

  useEffect(() => {
    const fetchEBoarders = async () => {
      try {
        const ref = collection(db, "eboarders");
        const snap = await getDocs(ref);

        const data = snap.docs.map((d) => {
          const raw = d.data();
          return {
            id: d.id,
            fullName: raw.fullName?.toString() ?? "",
            position: raw.position?.toString() ?? "",
            introduction: raw.introduction?.toString() ?? "",
            photoUrl: raw.photoUrl?.toString() ?? "",
          };
        });

        // Sort by POSITION_ORDER first; fallback to name
        const byPositionRank = (pos) => {
          const idx = POSITION_ORDER.findIndex(
            (p) => p.toLowerCase() === pos.toLowerCase()
          );
          return idx === -1 ? Number.POSITIVE_INFINITY : idx;
        };

        data.sort((a, b) => {
          const rankA = byPositionRank(a.position);
          const rankB = byPositionRank(b.position);
          if (rankA !== rankB) return rankA - rankB;
          return a.fullName.localeCompare(b.fullName);
        });

        setMembers(data);
      } catch (err) {
        console.error("Error fetching eboarders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchEBoarders();
  }, []);

  return (
    <>
      <Header />
      <Banner image={eboardBanner} text="E-Board" />

      <main className="eboard-container">
        <section className="eboard-intro section">
          <h1 className="subheading">Meet the E-Board</h1>
          <p className="body">
            We are the students who organize trips, practice, social events, and community for
            the Trojan Climbing Club! Say hi when you see us at the gym or on a trip! We would
            love to get to know each and every one of you.
          </p>
        </section>

        <section className="eboard-list section">
          {loading ? (
            <div className="eboard-loading" aria-busy="true" aria-live="polite">
              Loading…
            </div>
          ) : members.length === 0 ? (
            <p className="no-results">No E-Board members found.</p>
          ) : (
            members.map((m) => (
              <EBoarderCard
                key={m.id}
                fullName={m.fullName}
                position={m.position}
                introduction={m.introduction}
                photoUrl={m.photoUrl}
              />
            ))
          )}
        </section>
      </main>

      <Footer />
    </>
  );
};

export default EBoardPage;
