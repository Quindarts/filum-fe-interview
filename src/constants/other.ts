import { Instruction } from '../types/Ui.type';

export const API_URL = "https://filum-be-interview.vercel.app"

export const instructions: Instruction[] = [
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