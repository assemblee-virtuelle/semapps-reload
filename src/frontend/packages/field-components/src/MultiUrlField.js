import React from 'react';
import { useRecordContext } from 'react-admin';
import { Chip, Avatar, makeStyles } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import GitHubIcon from '@material-ui/icons/GitHub';
import { FiGitlab } from 'react-icons/fi';

const defaultdomainMapping = {
  'github.com': {
    label: 'GitHub',
    icon: <GitHubIcon />,
    color: 'black',
    contrastText: 'white'
  },
  'gitlab.com': {
    label: 'GitLab',
    icon: <FiGitlab />,
    color: 'orange',
    contrastText: 'black'
  },
  'opencollective.com': {
    label: 'Open Collective',
    icon: <Avatar src="https://opencollective.com/static/images/opencollective-icon.svg" />,
    color: 'white',
    contrastText: '#297EFF'
  }
};
const useStyles = makeStyles(theme => ({
  link: {
    textDecoration: 'unset',
    '& :hover': {
      cursor: 'pointer'
    }
  },
  chip: {
    paddingLeft: 5,
    paddingRight: 5,
    marginRight: 5
  },
  label: {
    marginTop: -1
  }
}));

const MultiUrlField = ({ source, domainMapping, ...rest }) => {
  const newDomainMapping = { ...defaultdomainMapping, ...domainMapping };
  const record = useRecordContext();
  const classes = useStyles();
  const urlArray = record[source] ? (Array.isArray(record[source]) ? record[source] : [record[source]]) : [];
  return urlArray.map((url, index) => {
    if (!url.startsWith('http')) url = 'https://' + url;
    const parsedUrl = new URL(url);
    if (!parsedUrl) return null;
    const chip = newDomainMapping[parsedUrl.hostname] || {
      label: 'Site web',
      icon: <LanguageIcon />,
      color: '#ea',
      contrastText: 'black'
    };
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={classes.link}>
        <Chip
          icon={React.cloneElement(chip.icon, { style: { color: chip.contrastText } })}
          size="small"
          label={chip.label}
          classes={{ root: classes.chip, label: classes.label }}
          style={{ color: chip.contrastText, backgroundColor: chip.color }}
          {...rest}
        />
      </a>
    );
  });
};

MultiUrlField.defaultProps = {
  addLabel: true
};

export default MultiUrlField;
