// Override this file to include custom code in the <head>
import React from 'react';
import { Helmet } from 'react-helmet';

export const CustomHead = () => (
  <Helmet>{
    <meta name="google-site-verification" content="obcIb3t5hRLbAjwptkzS6J6B4mzDYixkXGg5dI1NmEk" />
    /* Replace with whatever you want */}</Helmet>
);
