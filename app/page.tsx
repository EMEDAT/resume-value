'use client';

import Image from 'next/image';
import ResumeAnalyzerApp from './components/ResumeAnalyzerApp';
import styles from './styles/Home.module.css';

export default function Home() {
  return (
    <main className={styles.App}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.centeredContent}>
            <div className={styles.logoBox}>
              <Image src='/logo.png' alt='InterviewGPT logo' width='400' height='75' />
            </div>
            <ResumeAnalyzerApp />
          </div>
        </div>
        <p className={styles.footer}>Built by <a href='https://www.linkedin.com/in/emediong-titus-ba3979214/' target='_blank'>Emedat</a></p>
      </div>
    </main>
  )
}