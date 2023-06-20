import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import styles from "../styles/Home.module.css"; // add this line to import your CSS module

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Odon Hub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header title="Welcome to my store!" />
        <h1 className={styles.title}>Opening Soon</h1>
        <img
          className={styles.image}
          src="https://drive.google.com/uc?export=view&id=1vJ4cCtrYg6qgn9w9HW_YvtZbiFjdDvUC"
          alt="placeholder"
        />
        <p className={styles.description}>
          Get ready for a weed-erb experience! The best weed is coming to town
          and it's unlike anything you've tasted before. Crafted from the finest
          ingredients and simmered to perfection, our weed will take your taste
          buds on an unforgettable journey. Stay tuned, because we're about to
          elevate your culinary experience to new heights. Opening soon!
        </p>
      </main>

      <Footer />
    </div>
  );
}
