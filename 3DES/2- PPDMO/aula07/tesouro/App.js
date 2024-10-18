import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  ImageBackground,
  Image,
} from "react-native";
import * as Location from "expo-location";
import { Magnetometer } from "expo-sensors";
import { Audio } from "expo-av";

export default function App() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [treasure, setTreasure] = useState({ latitude: 0, longitude: 0 });
  const [step, setStep] = useState(null);
  const [hirn, setHirn] = useState(null);
  const [ImageBackgroundColor] = useState(null);
  const [magnetometerData, setMagnetometerData] = useState(null);
  const [sound, setSound] = useState();

  const radtoDeg = (rad) => (rad * 180) / Math.PI;

  const CalculateDirection = (loc1, loc2) => {
    const delatLon = loc2.longitude - loc1.longitude;
    const y = Math.sin(delatLon) * Math.cos(loc2.latitude);
    const angle = Math.atan2(y, x);
    return radtoDeg(angle);
  };

  const calculateDistance = (loc1, loc2) => {
    const R = 6371e3;
    const lat1 = loc1.latitude * (Math.PI / 180);
    const lat2 = loc2.latitude * (Math.PI / 180);
    const deltaLat = (loc2.latitude - loc1.latitude) * (Math.PI / 180);
    const deltaLon = (loc2.longitude - loc1.longitude) * (Math.PI / 180);

    const a =
      Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
      Math.cos(lat1) *
        Math.cos(lat2) *
        Math.sin(deltaLon / 2) *
        Math.sin(deltaLon / 2);
  };
}
