import React from "react";
import Link from "next/link";
import { TeamMember } from "@/types";

interface TeamCardProps {
  member: TeamMember;
}

export const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="team__item group text-center bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition duration-300">
      <div className="team__thumb relative mb-5 inline-block overflow-hidden rounded-2xl">
        <Link href={`/our-team/${member.slug}`}>
          <img
            src={member.image}
            alt={member.name}
            className="w-48 h-48 object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105 mx-auto"
          />
        </Link>
      </div>
      <h4 className="text-lg font-bold text-gray-900 hover:text-amber-600 transition">
        <Link href={`/our-team/${member.slug}`}>{member.name}</Link>
      </h4>
      <p className="text-xs font-semibold text-amber-600 uppercase tracking-wider mb-4">
        {member.designation}
      </p>
      {member.bio && (
        <p className="text-gray-500 text-xs mb-4 line-clamp-2">{member.bio}</p>
      )}
      <div className="social flex items-center justify-center gap-2 pt-3 border-t border-gray-100">
        {member.socials.facebook && (
          <a
            href={member.socials.facebook}
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook"
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-amber-500 hover:text-white flex items-center justify-center text-xs text-gray-600 transition"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
        )}
        {member.socials.twitter && (
          <a
            href={member.socials.twitter}
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-amber-500 hover:text-white flex items-center justify-center text-xs text-gray-600 transition"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
        )}
        {member.socials.linkedin && (
          <a
            href={member.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="w-8 h-8 rounded-full bg-gray-100 hover:bg-amber-500 hover:text-white flex items-center justify-center text-xs text-gray-600 transition"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        )}
      </div>
    </div>
  );
};
