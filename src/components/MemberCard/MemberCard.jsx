import "./MemberCard.css";

export function MemberCard({ member }) {
    return (
        <div className="member-card">
            <img
                className="member-card-img"
                src={member.image}
                alt={member.name}
            />
            <div className="member-card-info">
                <h3 className="member-card-name">{member.name}</h3>
                <p className="member-card-role">{member.role}</p>
                <p className="member-card-desc">{member.description}</p>
            </div>
        </div>
    );
}
