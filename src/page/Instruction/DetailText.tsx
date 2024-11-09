import { instructions } from '@/constants/other';
import { Instruction } from '@/types/Ui.type';
import { List, ListItem, ListItemText, Typography } from '@mui/material';
const DetailText = () => {
  return (
    <List>
      {instructions.map((instruction: Instruction, index: number) => (
        <ListItem key={index} sx={{ color: 'grey.300' }}>
          <ListItemText
            primary={
              <>
                Chọn
                <Typography component='span' sx={{ color: instruction.color }}>
                  {instruction.text}
                </Typography>
                : {instruction.description}
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default DetailText;
