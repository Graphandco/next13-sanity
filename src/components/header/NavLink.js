"use client";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function NavLink({ label, path, targetSegment }) {
    const activeSegment = useSelectedLayoutSegment();
    return (
        <Link
            href={path}
            className={`${activeSegment === targetSegment ? "text-white" : ""}`}
        >
            {label}
        </Link>
    );
}
