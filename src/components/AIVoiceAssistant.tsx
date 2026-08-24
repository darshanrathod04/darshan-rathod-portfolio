import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Microphone,
  MicrophoneSlash,
  Sparkle,
  ChatCircleText,
  GraduationCap,
  Folder,
  Code,
} from "@phosphor-icons/react";

declare global {
  interface Window {
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
  }
}

const suggestions = [
  "Tell me about your projects",
  "What technologies do you use?",
  "Explain Smart Campus Connect",
  "What is your education?",
];

export default function AIVoiceAssistant() {
  const [open, setOpen] = useState(false);
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState(
    "Hi! I'm Darshan's Portfolio Assistant. Ask me about projects, backend skills or education."
  );

  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (e: any) => {
      const text = e.results[0][0].transcript;
      setTranscript(text);
      generateReply(text);
    };

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);

    recognitionRef.current = recognition;
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      setResponse(
        "Speech recognition is not supported in this browser. You can still use the suggestion buttons below."
      );
      return;
    }

    if (listening) recognitionRef.current.stop();
    else recognitionRef.current.start();
  };

  const generateReply = (question: string) => {
    const q = question.toLowerCase();

    if (q.includes("project")) {
      setResponse(
        "My flagship projects include Smart Campus Connect, EduFlow 360, Library Management System and this interactive developer portfolio. They are built using Java, Spring Boot, React and MySQL."
      );
      return;
    }

    if (
      q.includes("skill") ||
      q.includes("technology") ||
      q.includes("stack")
    ) {
      setResponse(
        "My primary stack is Java, Spring Boot, REST APIs, JWT Authentication, MySQL, React, TypeScript and Tailwind CSS. My focus is backend engineering with clean architecture."
      );
      return;
    }

    if (q.includes("campus")) {
      setResponse(
        "Smart Campus Connect is a modular platform connecting students, colleges and companies. It includes authentication, applications, job workflows and scalable REST APIs."
      );
      return;
    }

    if (
      q.includes("education") ||
      q.includes("college") ||
      q.includes("degree")
    ) {
      setResponse(
        "I'm pursuing a Bachelor of Technology while specializing in Java Full Stack Development through real-world software projects and backend engineering."
      );
      return;
    }

    setResponse(
      "I can explain my projects, backend architecture, Spring Boot skills, React frontend or education. Try one of the suggested questions."
    );
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full border border-cyan-400/20 bg-gradient-to-br from-cyan-400 to-violet-500 text-black shadow-[0_0_35px_rgba(34,211,238,.45)]"
      >
        <Sparkle size={30} weight="fill" />
      </motion.button>

      {/* Assistant Window */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 20 }}
              transition={{ type: "spring", stiffness: 180, damping: 22 }}
              className="fixed bottom-6 right-6 z-50 w-[92vw] max-w-md overflow-hidden rounded-[28px] border border-white/10 bg-[#07111f]/95 backdrop-blur-2xl"
            >
              {/* Header */}
              <div className="border-b border-white/10 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 text-black">
                    <ChatCircleText size={24} weight="fill" />
                  </div>

                  <div>
                    <h3 className="font-bold text-white">
                      Portfolio Assistant
                    </h3>

                    <p className="text-xs text-cyan-300">
                      Interactive Developer Guide
                    </p>
                  </div>
                </div>
              </div>

              {/* Conversation */}
              <div className="space-y-4 p-5">
                <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/10 p-4">
                  <p className="text-sm leading-7 text-slate-200">{response}</p>
                </div>

                {transcript && (
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-2 text-[10px] uppercase tracking-[0.2em] text-slate-500">
                      You asked
                    </div>

                    <p className="text-sm text-white">{transcript}</p>
                  </div>
                )}

                {/* Suggestions */}
                <div>
                  <div className="mb-3 text-xs uppercase tracking-[0.2em] text-slate-500">
                    Suggested Questions
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((item) => (
                      <button
                        key={item}
                        onClick={() => {
                          setTranscript(item);
                          generateReply(item);
                        }}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300 transition hover:border-cyan-400/30 hover:text-cyan-200"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Topics */}
                <div className="grid grid-cols-3 gap-3">
                  <Topic
                    icon={<Folder size={20} weight="duotone" />}
                    label="Projects"
                  />
                  <Topic
                    icon={<Code size={20} weight="duotone" />}
                    label="Skills"
                  />
                  <Topic
                    icon={<GraduationCap size={20} weight="duotone" />}
                    label="Education"
                  />
                </div>

                {/* Voice Button */}
                <button
                  onClick={toggleListening}
                  className={`flex w-full items-center justify-center gap-3 rounded-2xl py-4 font-semibold transition ${
                    listening
                      ? "bg-red-500 text-white"
                      : "bg-gradient-to-r from-cyan-400 to-violet-500 text-black"
                  }`}
                >
                  {listening ? (
                    <>
                      <MicrophoneSlash size={22} weight="fill" />
                      Listening...
                    </>
                  ) : (
                    <>
                      <Microphone size={22} weight="fill" />
                      Ask with Voice
                    </>
                  )}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function Topic({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-center">
      <div className="mb-2 flex justify-center text-cyan-300">{icon}</div>
      <div className="text-xs text-slate-300">{label}</div>
    </div>
  );
}