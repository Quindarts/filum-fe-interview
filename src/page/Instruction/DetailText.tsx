import { List, ListItem, ListItemText, Typography } from '@mui/material';
interface Instruction {
  text: string;
  color: string;
  description: string;
}

const instructions: Instruction[] = [
  {
    text: " 'Có' ",
    color: 'success.light',
    description:
      'Nếu câu đó phản ánh hiện trạng đang có và được thực hiện một cách nhất quán (ít nhất 80% thời gian)',
  },
  { text: " 'Không có' ", color: 'error.light', description: 'nếu hoàn toàn chưa thực hiện' },
  {
    text: " 'Không rõ vấn đề này' ",
    color: 'warning.light',
    description: 'Nếu chưa chắc chắn đã thực hiện hay chưa',
  },
];
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
