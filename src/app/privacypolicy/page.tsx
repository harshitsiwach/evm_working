import Head from 'next/head';
import "./page.module.css"
import styles from "@/app/privacypolicy/page.module.css"
import React  from 'react';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy - EVM Warfare</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.heading}>Privacy Policy EVM Warfare</h1>

        {/* Section 1: Introduction */}
        <div className={styles.box}>
          <h2 className={styles.subHeading}>1.Introduction</h2>
          <p className={styles.paragraph}>
            Welcome to EVM Warfare! We are dedicated to protecting your privacy and handling your data with the utmost care and transparency. This Privacy Policy is designed to inform you about our practices in collecting, using, and securing your data while you enjoy our innovative third-person shooter game.
          </p>
        </div>

        {/* Section 2: Data Collection Specifics */}
        <div className={styles.box}>
          <h2 className={styles.subHeading}>2.Data Collection Specifics</h2>
          <p className={styles.paragraph}>
            In EVM Warfare, we focus on enhancing your gameplay experience through the following types of data:
            <ul>
              <li>Behavioral Data: This includes your strategies, choices, and in-game interactions. By understanding your play style, we aim to continuously improve game dynamics and provide personalized challenges.</li>
              <li>Social Data: Your interactions with other players and your preferences in the game help us build a vibrant and engaging community. We use this data to foster better player connections and tailor community events.</li>
            </ul>
          </p>
        </div>

        {/* Section 3: Blockchain Integration and Privacy */}
        <div className={styles.box}>
          <h2 className={styles.subHeading}>3.Blockchain Integration and Privacy</h2>
          <p className={styles.paragraph}>
            Blockchain technology in EVM Warfare ensures secure and transparent handling of your in-game transactions and digital asset management. This immutable record-keeping enhances your gameplay experience while safeguarding your privacy.
          </p>
        </div>

        {/* Section 4: User Consent and Rights */}
        <div className={styles.box}>
          <h2 className={styles.subHeading}>4.User Consent and Rights</h2>
          <p className={styles.paragraph}>
            We value your right to privacy and control over your personal data. This policy serves as your guide to understanding these rights and how you can exercise them, including the provision and withdrawal of consent.
          </p>
        </div>

        {/* Section 5: Data Storage and Security */}
        <div className={styles.box}>
          <h2 className={styles.subHeading}>5.Data Storage and Security</h2>
          <p className={styles.paragraph}>
            Our commitment to data security is unwavering. We use Epic Online Services (EOS) for data storage, which provides state-of-the-art security measures. Any updates to our security protocols will be communicated via our social media channels and in-game notifications.
          </p>
        </div>

        {/* Section 6: Third-Party Sharing Policies */}
        <div className={styles.box}>
          <h2 className={styles.subHeading}>6.Third-Party Sharing Policies</h2>
          <p className={styles.paragraph}>
            We may share certain data with trusted third parties for operational purposes, always ensuring your privacy is our top priority. This sharing is done transparently and with the utmost care for your personal information.
          </p>
        </div>

        {/* Section 7: Compliance with International Laws */}
        <div className={styles.box}>
          <h2 className={styles.subHeading}>7.Compliance with International Laws</h2>
          <p className={styles.paragraph}>
            EVM Warfare is designed for a global audience, compliant with international laws like GDPR and CCPA. However, it is not available in Korea and China. We are committed to ensuring your rights and our data handling practices align with these regulations.
          </p>
        </div>

        {/* Section 8: Policy Updates and User Notification */}
        <div className={styles.box}>
          <h2 className={styles.subHeading}>8.Policy Updates and User Notification</h2>
          <p className={styles.paragraph}>
            We will notify you of any changes to our privacy policy through in-game notifications and our social media channels. A summary of changes will be provided for your convenience.
          </p>
        </div>

        {/* Section 9: Children's Privacy */}
        <div className={styles.box}>
          <h2 className={styles.subHeading}>9.Children's Privacy</h2>
          <h2 className={styles.subHeading}>9. Childrens Privacy</h2>
          <p className={styles.paragraph}>
            EVM Warfare adheres to region-specific ratings and regulations, including ACB, CERO, CSRR, ESRB, FBP, Generic, OFLC, PEGI, and USK, to ensure appropriate content and privacy measures for our younger players.
          </p>
        </div>

        {/* Section 10: Contact Information and User Support */}
        <div className={styles.box}>
          <h2 className={styles.subHeading}>10.Contact Information and User Support</h2>
          <h2 className={styles.subHeading}>A.Contacting Us</h2>
          <p className={styles.paragraph}>
          If you have any questions about this Policy, our practices regarding your personal information related to the Site or Game, or if you would like to have us remove your information from our database and deactivate your Account, please contact us at <Link className='text-red-600' href='evmwarfare.com/privacypolicy'>evmwarfare@proton.me</Link> or reach out to us via our social media platforms <Link className='text-red-600' href='https://twitter.com/evmwarfare'> [Twitter / X]</Link> <Link className='text-red-600' href="https://discord.com/invite/H42wMEXrbg">[Discord]</Link> <Link className='text-red-600' href='https://www.instagram.com/evm_warfare/'>[Instagram]</Link> . We will respond to your request to access within 7 days. We're here to assist you and address your concerns.
          Please note that the deletion of your data will lead to the termination of your Account and applicable services. However, also note that when you delete your Account, we may retain your Account information for a reasonable period of time afterward for the purpose of internal account management and fraud prevention activities.          </p>
        
          <h2 className={styles.subHeading}>B.Updates and Changes</h2>
          <p className={styles.paragraph}>
          We may update this privacy statement to reflect changes to our information practices. If we make any material changes we will notify you by email (sent to the e-mail address specified in your account) or by means of a notice on this Site prior to the change becoming effective. We encourage you to periodically review this page for the latest information on our privacy practices. BY USING THE SITE AND/OR THE GAME, YOU SIGNIFY THAT YOU HAVE READ, UNDERSTAND AND AGREE TO THE TERMS OF THIS PRIVACY POLICY. IF YOU DO NOT AGREE WITH THIS PRIVACY POLICY, PLEASE DO NOT USE THE SITE OR THE GAME.</p>
        </div>
      </div>
    </>
  );
};

export default Page;