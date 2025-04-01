import React from "react";

// Header 컴포넌트
function Header() {
  return (
    <header>
      <h1>My React Website</h1>
    </header>
  );
}

// Footer 컴포넌트
function Footer() {
  return (
    <footer>
      <p>&copy; 2025 My React Site</p>
    </footer>
  );
}

// ProfileCard 컴포넌트 (2개 이상의 props 사용)
function ProfileCard({ name, role }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{role}</p>
    </div>
  );
}

// UserList 컴포넌트
function UserList() {
  const users = [
    { name: "Alice", role: "Frontend Developer" },
    { name: "Bob", role: "Backend Developer" },
    { name: "Charlie", role: "UI/UX Designer" },
  ];

  return (
    <div>
      {users.map((user, idx) => (
        <ProfileCard key={idx} name={user.name} role={user.role} />
      ))}
    </div>
  );
}

// MainContent 컴포넌트
function MainContent() {
  return (
    <main>
      <h2>Team Members</h2>
      <UserList />
    </main>
  );
}

// App 루트 컴포넌트
export default function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}
