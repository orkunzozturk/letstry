import React from 'react'
import Slugger from 'github-slugger'
import { Link } from 'gatsby';
import { Typography, Card, CardContent } from '@material-ui/core';
import styled from '../styled';


const slugger = new Slugger()
const ToCMenu = styled('a')`
&{
  text-decoration: none;
  color: inherit;
}
&:hover {
  outline: 0;
  text-decoration: underline;
  color: #f4813a;
}
`;

export default ({ headings }) => (
    <Card style={{backgroundColor: "#f4f4f4"}} variant="outlined" className={Card}>
        <CardContent>
          <Typography variant="h6" component="h2" color="TextPrimary">
          Table of Contents
          </Typography >
          <Typography color="textSecondary" variant="body1" >

            {headings
              .filter(heading => heading.depth !== 1)
              .map(heading => (
                <a key={heading.value}><br></br>
                          <ToCMenu><Link to={'#' + slugger.slug(heading.value)}>{heading.value}</Link></ToCMenu>
                </a>
              ))}
          </Typography>
        </CardContent>
    </Card>
)