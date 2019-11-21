import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Switch } from "@material-ui/core";
import firebase from 'firebase';

import { FIREBASE_CONFIGS } from './../configs';

firebase.initializeApp(FIREBASE_CONFIGS);

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 500px;
`;

const InputGroup = styled.div``;

const Label = styled.label``;

const Dashboard = () => {
  const [ledStatus, setLedStatus] = useState(false);
  const db = firebase.firestore();

  useEffect(() => {
    db.collection("lampada")
      .doc('k3PbloklzjBDL3gv07XG')
      .get()
      .then(snapshot => {
        const { status: ledStatus } = snapshot.data();
        setLedStatus(ledStatus);
      });
  })

  const handleLedStatus = () => {
    setLedStatus(!ledStatus);
    db.collection("lampada")
      .doc('k3PbloklzjBDL3gv07XG')
      .set({ status: !ledStatus})
  }

  return (
    <Container>
      <InputGroup>
        <Label>Led status</Label>
        <Switch checked={ledStatus} onChange={() => handleLedStatus()} />
      </InputGroup>
    </Container>
  );
};

export default Dashboard;
