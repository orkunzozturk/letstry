// Override this file to include custom code in the <head>
import React from 'react';
import { Helmet } from 'react-helmet';

export const CustomHead = () => (
  <Helmet>{
    <meta name="google-site-verification" content="BGu-WExnWQbhbi0M0B4PhFzTtvF5EUD44vqqJdiGZOY" />
    /* Replace with whatever you want */}</Helmet>
);
