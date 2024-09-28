import styled from "@emotion/styled";

export const ContainerDiv = styled.div`
  margin-left: 60px;
  min-width: 800px;
  /* padding: 80px; */
  height: calc(100vh - 65px);
  display: flex;
  box-sizing:border-box;
  /* background-color:red; */
  overflow-y: auto;
  /* grid-template-columns: 1fr 1fr; */
  /* grid-gap: 30px; */
  /* .left-container {
    border-right: 1px solid #bdbdbd;
    overflow-y: scroll; */

    ::-webkit-scrollbar {
      width: 4px; 
    }

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
  /* } */
  /* .right-container{ */
    /* box-sizing: border-box; */
  /* } */
`;
