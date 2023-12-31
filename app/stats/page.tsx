"use client"
import styles from '../page.module.css';
import React from 'react';
import Dropdown from '../components/Dropdown';
import Spinner from '../components/Spinner';

export default function Stats() {
  return (
    <main >
      <div className={styles.mainWrapper}>
      <div className={styles.statsContainer}>
        <h1 className={styles.smallWebTitle}>Stats</h1>
      </div>
        <Spinner />
        </div>
      <div className={styles.dataVisualsSection2}>
        <h2 className={styles.deeperHeader}>Diving</h2>
        <h2 className={styles.deeperHeader2}>Deeper.</h2>
      </div>
        <Dropdown />
    </main>
  );
}
