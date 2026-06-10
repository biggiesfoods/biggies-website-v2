export const inputStyles = `
  /* Layout & Box Model */
  w-full h-12 px-2 my-1 rounded-sm box-border
  
  /* Text & Placeholders */
  text-gray-500 dark:text-white 
  placeholder-gray-500 dark:placeholder-gray-500
  
  /* Backgrounds & Borders */
  bg-gray-50 dark:bg-gray-950
  border border-gray-200 dark:border-gray-800
  
  /* Interactive States (Hover, Focus, Transitions) */
  outline-none focus:outline-none
  transition-colors duration-(--duration-animate)
  focus:border-transparent
  hover:bg-gray-100 hover:dark:bg-gray-900
  focus:bg-gray-200 focus:dark:bg-gray-800
`
    .replace(/\s+/g, " ")
    .trim();

export const textAreaStyles = `
  /* Layout & Box Model */
  w-full min-h-12 h-12 px-2 py-2 mt-1 rounded-sm box-border 
  resize-y overflow-hidden
  
  /* Text & Placeholders */
  text-gray-500 dark:text-white 
  placeholder-gray-500 dark:placeholder-gray-500
  
  /* Backgrounds & Borders */
  bg-gray-50 dark:bg-gray-950
  border border-gray-200 dark:border-gray-800
  
  /* Interactive States & Custom Animation */
  outline-none focus:outline-none
  transition-colors duration-(--duration-animate)
  hover:bg-gray-100 hover:dark:bg-gray-900
  focus:bg-gray-200 focus:dark:bg-gray-800
`
    .replace(/\s+/g, " ")
    .trim();
