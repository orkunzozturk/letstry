import React from 'react'
import Slugger from 'github-slugger'
import { Link } from 'gatsby';
import { Typography, Card, CardContent, ListItem } from '@material-ui/core';
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
const ToCList = styled ('ul')`
&{
  list-style-type: none;
  color: inherit;
}
`
const ToCitem = styled ('li')`
&{
  text-decoration: none;
  color: inherit;
}
&:hover {
  outline: 0;
  text-decoration: underline;
  color: #2a4387;
}
`


export default ({ headings }) => (
    <Card style={{backgroundColor: "#f4f4f4"}} variant="outlined" className={Card}>
        <CardContent>
          <Typography variant="h6" component="h2" color="TextPrimary">
          Table of Contents
          </Typography >
          <ToCList>
          <Typography color="textSecondary" variant="body1" >
            <ul>
            {headings
              .filter(heading => heading.depth !== 1)
              .map(heading => (
               
                <li key={heading.value}>
                          <ToCMenu><Link to={'#' + slugger.slug(heading.value)}>
                            
                            {heading.value}</Link></ToCMenu>
                </li>
              ))}
              
              </ul>
          </Typography>
          </ToCList>
        </CardContent>
    </Card>
)