import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const BASE_URL = "http://gateway.marvel.com/v1/public/characters";
const API_KEY = "3e7719c948c53ad8ac07f1f2aacac3b9 ";
const HASH = "bcf154aac148765904a9bf8f4cf2ea7a3b6597ee";
