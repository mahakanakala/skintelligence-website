'use client';
import React, { useState } from 'react';
import axios from 'axios';
import styles from '../page.module.css';

const SkincareRecommendation: React.FC = () => {
  const [recommendedProduct, setRecommendedProduct] = useState<any>(null);

  const handleRecommendation = async () => {
    try {
      const userData = {
        skintype: 'oily',
        routine: 'AM',
        max_price: 50,
      };

      const response = await axios.post('/api/recommendation', userData);
      setRecommendedProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className={styles.quizContainer}>
      <div className={styles.questionWrapper}>
      <div className={styles.question1Img}>
        <div className={styles.question1}>
          <h1 className={styles.mainQuestion}>Build a routine! <br/> </h1>
          <h4 className={styles.quizDescription}>Build a skincare routine with clean products</h4>
        </div>
        <div className={styles.question1Options}>
          <ul className={styles.quizOptions}>
            <li>
              <button className={styles.formButton} type="button" title="AM" placeholder='AM' >
             
            </button>  
            <h4 className={styles.quizOptionText}>AM</h4> 
            </li>
            <li >
              <button className={styles.formButton} type="button" title="PM" onClick={() => console.log("PM clicked!")} >
            </button>
            <h4 className={styles.quizOptionText}>PM</h4>
            </li>
          </ul>
        </div>
        </div>
      </div>
      <div className={styles.question2Wrapper}>
      <div className={styles.question2Img}>
        <div className={styles.question2}>
          <h1  className={styles.mainQuestion} >Skin Type</h1>
          </div>
          </div>
        <div className={styles.question2Options}>
          <ul className={styles.quizOptions}>
            <li>
              <button className={styles.formButton} type="button" title="Oily" >             
            </button>
            <h4 className={styles.quizOptionText}>Oily</h4>
            </li>
            <li>
              <button className={styles.formButton} type="button" title="Normal"  >
            </button>
            <h4 className={styles.quizOptionText}>Normal</h4>
            </li>
            <li>
              <button className={styles.formButton} type="button" title="Combination" >             
            </button>
            <h4>Combination</h4>
            </li>
            <li>
              <button className={styles.formButton} type="button" title="Dry" >            
            </button>
            <h4 className={styles.quizOptionText}>Dry</h4>
            </li>
          </ul>
        </div>
        
      </div>
      <div className={styles.question3Wrapper}>
      <div className={styles.question3Img}>
        <div className={styles.question3}>
          <h1  className={styles.mainQuestion}>Price Range</h1>
          <div className={styles.question3Options}>
            <ul className={styles.quizOptions}>
              <li>
                <button className={styles.formButton} type="button" title="Under $50" >
              </button>
              <h4 className={styles.quizOptionText}>Under $50</h4>
              </li>
              <li>
                <button className={styles.formButton} type="button" title="Under $70" > 
                </button>
                <h4>Under $70</h4>
              </li>
              <li>
                <button className={styles.formButton} type="button" title="Under $100">
                  </button>
                  <h4>Under $100</h4>
              </li>
            </ul>
          </div>
        </div>
        </div>
        </div>
      <button className={styles.submitBtn} onClick={handleRecommendation}>Submit</button>
      {recommendedProduct && (
        <div className={styles.recommendedProduct}>
          <h2>Recommended Product</h2>
          <p>Name: {recommendedProduct.Name}</p>
          <p>Brand: {recommendedProduct.Brand}</p>
          
        </div>
      )}
    </div>
  );
};

export default SkincareRecommendation;
