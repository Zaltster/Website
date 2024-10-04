import Link from 'next/link'

export default function Home() {
    return (
        <div>
            <h1>Welcome to My Portfolio</h1>
            <p>A general description of myself goes here.</p>
            <nav>
                <Link href="/MLprojects">ML Projects</Link>
                <Link href="/SoftwareProjects">Software</Link>
            </nav>
            <div>
                <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
                <a href="https://github.com/yourusername">GitHub</a>
            </div>
        </div>
    )
}