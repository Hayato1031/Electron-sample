import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { CalendarIcon, ChartPieIcon, HouseIcon, SettingsIcon } from "@yamada-ui/lucide";

// 固定のスタイルを定義
const styles = {
  container: {
    color: "white",
    height: "100%",
    width: "100%",
    padding: "1.5rem 2rem 0rem 2rem",
    borderRight: "0.1px solid #ABABAB",
    backgroundColor: "#FCFCFC",
  },
  titleBox: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "2rem",
  },
  titleIconContainer: {
    width: "2.5rem",
    height: "2.5rem",
    borderRadius: "0.75rem",
    background: "linear-gradient(to bottom right, #7c3aed, #d946ef, #ec4899)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  titleIconText: {
    color: "white",
    fontWeight: "bold",
    fontSize: "1.25rem",
  },
  titleText: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    background: "linear-gradient(to right, #7c3aed, #ec4899)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  },
  menuContainer: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "1rem",
    color: "#333333",
  },
  menuText: {
    fontFamily: "Roboto-Regular",
    fontSize: "1rem",
  },
};

// 動的なメニューボタンのスタイルを生成する関数
const getMenuButtonStyle = (isActive: boolean, color: string): React.CSSProperties => {
  // 基本のスタイル
  const baseStyle: React.CSSProperties = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    padding: "0.75rem",
    borderRadius: "0.5rem",
    textAlign: "left",
    transition: "all 0.3s",
    cursor: "pointer",
  };

  if (isActive) {
    // 各色ごとのアクティブ状態のスタイル
    const activeStyles: Record<string, { background: string; color: string; fontWeight: string }> = {
      violet: { background: "#E9D5FF", color: "#7C3AED", fontWeight: "600" },
      fuchsia: { background: "#FCE7F3", color: "#D946EF", fontWeight: "600" },
      pink: { background: "#FCE7F3", color: "#EC4899", fontWeight: "600" },
      slate: { background: "#F1F5F9", color: "#64748B", fontWeight: "600" },
    };
    const active = activeStyles[color] || { background: "#EEE", color: "#333", fontWeight: "600" };
    return { ...baseStyle, background: active.background, color: active.color, fontWeight: active.fontWeight };
  } else {
    // 非アクティブ状態の文字色
    return { ...baseStyle, color: "#4B5563" };
  }
};

const Menu: React.FC = () => {
  const router = useRouter();

  const menuItems = [
    { icon: <HouseIcon fontSize={20} />, label: "ホーム", path: "/home", color: "violet" },
    { icon: <CalendarIcon fontSize={20} />, label: "カレンダー", path: "/history", color: "fuchsia" },
    { icon: <ChartPieIcon fontSize={20} />, label: "統計", path: "/stats", color: "pink" },
    { icon: <SettingsIcon fontSize={20} />, label: "設定", path: "/setting", color: "slate" },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.titleBox}>
        <div style={styles.titleIconContainer}>
          <span style={styles.titleIconText}>E</span>
        </div>
        <h1 style={styles.titleText}>Electron</h1>
      </div>
      <div style={styles.menuContainer}>
        {menuItems.map((item) => (
          <Link href={item.path} key={item.path}>
            <div style={getMenuButtonStyle(router.pathname.startsWith(item.path), item.color)}>
              {item.icon}
              <span style={styles.menuText}>{item.label}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Menu;