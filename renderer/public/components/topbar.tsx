import React from "react";
import { Button } from "@yamada-ui/react";
import { PlusIcon } from "@yamada-ui/lucide";

const styles = {
    container: {
        display: 'flex',
        height: '4rem',
        width: '100%',
        borderBottom: "0.2px solid #ABABAB",
        alignItems: "center",
        position: "fixed" as const,
        backgroundColor: "#FCFCFC",
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        background: 'linear-gradient(to right, #7c3aed, #ec4899)',
        color: 'white',
        padding: '0.5rem 1rem',
        borderRadius: '0.5rem',
        transition: 'opacity 0.3s',
        cursor: 'pointer',
        position: 'fixed' as const,
        right: '2rem',
    },
    buttonHover: {
        opacity: 0.9,
    },
}

const Topbar: React.FC = () => {
    return (
        <div style={styles.container}>
            <button style={styles.button}>
                <PlusIcon size={20} />
                新規記録
            </button>
        </div>
    );
};

export default Topbar;