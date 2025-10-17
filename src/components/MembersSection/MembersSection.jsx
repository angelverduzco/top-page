import "./MembersSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { MEMBERS } from "../../data";
import { MemberCard } from "../MemberCard/MemberCard";
import { useState } from "react";

export function MembersSection() {
  const [member, setMember] = useState(true);

  return (
    <section className="members-section">
      <h2 className="members-section-title">Leaders of the Banditos</h2>
      <div className="members-section-content">
        {member ? (
          <MemberCard member={MEMBERS.tyler} />
        ) : (
          <MemberCard member={MEMBERS.josh} />
        )}
      </div>
      <FontAwesomeIcon
        className="arrow-btn left"
        icon={faArrowLeft}
        size="sm"
        onClick={() => setMember(!member)}
      >
        ⭠
      </FontAwesomeIcon>
      <FontAwesomeIcon
        className="arrow-btn right"
        icon={faArrowRight}
        size="sm"
        onClick={() => setMember(!member)}
      >
        ⭢
      </FontAwesomeIcon>
    </section>
  );
}
