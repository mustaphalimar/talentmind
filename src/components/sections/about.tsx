"use client";
import Container from "../layouts/container";

import { Quote } from "lucide-react";
import SectionTitle from "../main/section-title";
import { motion } from "motion/react";

const About = () => {
  return (
    <section className="min-h-[80vh] py-20" id="about">
      <Container>
        <SectionTitle text="À propos de nous" />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="mt-10 md:text-xl flex flex-col gap-8 "
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            TalentMind est un cabinet de conseil spécialisé dans le pilotage
            stratégique des ressources humaines et la valorisation du capital
            humain.
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            Nous aidons les organisations à attirer, développer et retenir les
            talents grâce à une approche combinant expertise RH, technologies
            innovantes et intelligence artificielle.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="flex justify-center gap-2 mt-16 "
          >
            <p className="mt-4 text-2xl text-center text-muted-foreground">
              <span className="text-3xl">❝ </span>
              Notre mission est de transformer la fonction RH <br /> en un
              véritable levier de performance durable.
              <span className="text-3xl"> ❞</span>
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default About;
