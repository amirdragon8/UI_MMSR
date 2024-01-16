import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { TRetrievalsystem, TRetrievedSong } from '@/lib/songs';
import SongTable from '../SongTable';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function RetrievedSongAccordion({ retrievalsystems, retrievedSongs }: { retrievalsystems: TRetrievalsystem[], retrievedSongs: TRetrievedSong[] }) {
  const [expanded, setExpanded] = React.useState<string | false>('panel0');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <>
      {retrievalsystems.map((rs, index) => {
        const accordion = `accordion${rs.retrievalsystem}`
        const panel = `panel${index}`
        const panelheader = `panel${index}d-header`
        const panelcontent = `panel${index}d-content`

        const filteredSongs = [...retrievedSongs.filter((row) => { if (row.retrievalsystemId === rs.retrievalsystemId) return row })]

        return (
          <Accordion expanded={expanded === panel} onChange={handleChange(panel)} key={accordion}>
            <AccordionSummary aria-controls={panelcontent} id={panelheader}>
              <Typography>{rs.retrievalsystem}</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                Description
              </Typography>
              <Typography sx={{paddingBottom:3}}>
                {rs.info}
              </Typography>
            
              <SongTable songs={filteredSongs} retrievalsystemId={rs.retrievalsystemId}></SongTable>
            </AccordionDetails>
          </Accordion>
        )
      })
      }

    </>
  );
}