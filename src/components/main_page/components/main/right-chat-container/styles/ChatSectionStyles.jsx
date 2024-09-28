import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const ChatArea = styled.div`
  padding: 20px;
  height: calc(100vh - 250px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  ::-webkit-scrollbar {
      width: 4px; /* Width of the scrollbar */
    }

    /* Style the track (background) */
    ::-webkit-scrollbar-track {
      background: #f1f1f1; /* Light grey background */
      border-radius: 10px; /* Rounded corners */
    }

    /* Style the thumb (scroll handle) */
    ::-webkit-scrollbar-thumb {
      background: #888; /* Dark grey handle */
      border-radius: 10px; /* Rounded corners */
    }

    /* Style the thumb on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555; /* Darker grey on hover */
    }
  /* background-color:green */
`;

export const Message = styled.div`
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: ${(props) => (props.sent ? '#1976d245' : '#dbdbdb')};
  align-self: ${(props) => (props.sent ? 'flex-end' : 'flex-start')};
  max-width: 60%;
  word-wrap: break-word;
`;

export const InputArea = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
  position: sticky;
  bottom: 0;
  /* margin-bottom:-100px; */
`;
export const SenderName = styled(Typography)`
  font-weight: bold;
  margin-bottom: 5px;
`;