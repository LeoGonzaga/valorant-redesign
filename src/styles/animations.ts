export const setScrollBarStyled = () => {
  return `
        ::-webkit-scrollbar {
            width: 5px;
        }
        
        ::-webkit-scrollbar-thumb {
            background-color: #2b274f;
            border-radius: 20px;
            border: 3px solid #2b274f;
        }
        &:hover{
        
        ::-webkit-scrollbar-thumb {
        border-radius: 20px;
        
        }
    }
    `;
};
