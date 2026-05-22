import { useState } from "react";
import styles from "./Contact.module.css";

type FormStatus = "idle" | "loading" | "success" | "error";

const Contact = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async () => {
    if (!nome || !email || !mensagem) return;

    setStatus("loading");

    try {
      const res = await fetch("https://formspree.io/f/xeengqzy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, mensagem }),
      });

      if (res.ok) {
        setStatus("success");
        setNome("");
        setEmail("");
        setMensagem("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const socialLinks = [
    {
      name: "Email",
      url: "mailto:rafaelardosanjos@gmail.com",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/rafaelardosanjos/",
    },
    {
      name: "GitHub",
      url: "https://github.com/rafasversion",
    },
    {
      name: "Instagram",
      url: "https://instagram.com/codebyela",
    },
  ];

  return (
    <div className={styles.contactContent}>
      <p className={styles.termLine}>&gt; send_message.exe</p>

      <div className={styles.contactGrid}>
        <div className={styles.contactLeft}>
          <div className={styles.contactCardHeader}>Social_Links.json</div>

          <div className={styles.contactCardBody}>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className={styles.socialBtn}
              >
                <span className={styles.socialArrow}>▶</span>
                {social.name}
              </a>
            ))}

            <div className={styles.contactStatus}>
              <p>// Status: Disponível para vagas</p>
              <p>// Tipo: CLT / Presencial DF / Remoto</p>
            </div>
          </div>
        </div>

        <div className={styles.contactRight}>
          <div className={styles.contactCardHeader}>Envie_Mensagem.php</div>

          <div className={styles.contactCardBody}>
            {status === "success" ? (
              <div className={styles.formSuccess}>
                <p>// mensagem enviada com sucesso ✓</p>
                <p>// retorno em breve!</p>
              </div>
            ) : (
              <>
                <label className={styles.contactLabel}>Nome:</label>
                <input
                  className={styles.contactInput}
                  placeholder="Seu nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />

                <label className={styles.contactLabel}>Email:</label>
                <input
                  className={styles.contactInput}
                  placeholder="seu@email.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label className={styles.contactLabel}>Mensagem:</label>
                <textarea
                  className={styles.contactTextarea}
                  placeholder="Sua mensagem..."
                  value={mensagem}
                  onChange={(e) => setMensagem(e.target.value)}
                />

                {status === "error" && (
                  <p className={styles.formError}>
                    // erro ao enviar, tente novamente
                  </p>
                )}

                <button
                  className={styles.sendBtn}
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "▶ Enviando..." : "▶ Enviar Mensagem"}
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
