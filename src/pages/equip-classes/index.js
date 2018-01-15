import React from 'react';
import styled from 'react-emotion';
import BreezeForm from '../../components/BreezeForm';
import SmallImage from '../../components/SmallImage';
import equip from './equip.jpg';

const Page = () => (
  <div>
    <h1>Equip Classes</h1>

    <SmallImage src={equip} alt="Equip Classes" />
    <p>NEW Equipping Classes! SIGN UP BELOW!</p>
    <p>
      Monday nights starting January 15<br />
      6:30pm - 7:30pm @ Lifestone
    </p>
    <p>
      EQUIP 2018<br />
      7 Week Bible Study on Faith and Reason<br />
      Apologetics (Defending Your Faith) - Come With Any Questions<br />
      Monday Nights 6:30 to 7:30 PM
    </p>
    <p>We'll discuss the following topics:</p>

    <ul>
      <li>
        Jan 15 Faith Without Reason Is Dead: Understanding Hebrews 11, What is
        Faith?
      </li>
      <li>Jan 22 Why Good Arguments Often Fail</li>
      <li>Jan 29 The Universe Next Door - Understanding Other Worldviews</li>
      <li>
        Feb 5 An emotional religion for people tired of religion: Agnosticism
        and Atheism
      </li>
      <li>Feb 12 Do you believe in Evolution?</li>
      <li>Feb 19 The Power of Truth</li>
      <li>Feb 26 Our Role in Evangelism</li>
    </ul>

    <p>
      Equipping classes are designed to make the Bible easy and accessible to
      understand so that experienced and new Christians alike can share and
      defend their faith. We hope you take 7 weeks to be challenged to grow in
      who God has called you to be, “equipped” and ready to build up the body of
      Christ! Free onsite childcare provided.
    </p>

    <BreezeForm
      height={1000}
      url="https://lifestonechurch.breezechms.com/form/f754f7"
    />
  </div>
);

export default Page;
