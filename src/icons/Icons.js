export default function BtnDelete() {
  return (
    <svg
      className='hover:fill-red-500'
      fill='#000000'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      width='24px'
      height='24px'
    >
      <path d='M 10.806641 2 C 10.289641 2 9.7956875 2.2043125 9.4296875 2.5703125 L 9 3 L 4 3 A 1.0001 1.0001 0 1 0 4 5 L 20 5 A 1.0001 1.0001 0 1 0 20 3 L 15 3 L 14.570312 2.5703125 C 14.205312 2.2043125 13.710359 2 13.193359 2 L 10.806641 2 z M 4.3652344 7 L 5.8925781 20.263672 C 6.0245781 21.253672 6.877 22 7.875 22 L 16.123047 22 C 17.121047 22 17.974422 21.254859 18.107422 20.255859 L 19.634766 7 L 4.3652344 7 z' />
    </svg>
  );
}

export function BtnActive() {
  return (
    <svg
      className='w-5 h-5'
      version='1.1'
      id='Capa_1'
      x='0px'
      y='0px'
      width='500px'
      height='500px'
      viewBox='0 0 500 500'
    >
      <path
        d='M400,0h-66.667c-55.141,0-100,44.859-100,100v100H25c-13.75,0-25,11.25-25,25v250c0,13.75,11.25,25,25,25h283.333
		c13.751,0,25-11.25,25-25V225c0-13.75-11.249-25-25-25H300V100c0-18.38,14.953-33.333,33.333-33.333H400
		c18.38,0,33.333,14.953,33.333,33.333v100H500V100C500,44.859,455.141,0,400,0z M200,433.333h-66.667l14.5-72.5
		c-8.754-6.007-14.5-16.08-14.5-27.5c0-18.409,14.924-33.333,33.333-33.333S200,314.924,200,333.333c0,11.42-5.746,21.493-14.5,27.5
		L200,433.333z'
      />
    </svg>
  );
}

export function BtnCompleted() {
  return (
    <svg
      className='w-5 h-5 fill-green-500'
      version='1.1'
      id='Capa_2'
      x='0px'
      y='0px'
      width='500px'
      height='500px'
      viewBox='0 0 500 500'
    >
      <path
        d='M391.667,200h-8.334V100c0-55.141-44.858-100-100-100h-66.667c-55.141,0-100,44.859-100,100v100h-8.333
		c-13.75,0-25,11.25-25,25v250c0,13.75,11.25,25,25,25h283.333c13.75,0,25-11.25,25-25V225C416.667,211.25,405.417,200,391.667,200z
		 M283.333,433.333h-66.667l14.5-72.5c-8.754-6.007-14.5-16.08-14.5-27.5C216.667,314.924,231.591,300,250,300
		s33.333,14.924,33.333,33.333c0,11.42-5.745,21.493-14.5,27.5L283.333,433.333z M316.667,200H183.333V100
		c0-18.38,14.953-33.333,33.333-33.333h66.667c18.38,0,33.334,14.953,33.334,33.333V200z'
      />
    </svg>
  );
}

export function BtnEdit() {
  return (
    <svg
      className='w-7 h-7'
      enable-background='new 0 0 64 64'
      height='64px'
      id='Layer_1'
      version='1.1'
      viewBox='0 0 64 64'
      width='64px'
    >
      <path d='M55.736,13.636l-4.368-4.362c-0.451-0.451-1.044-0.677-1.636-0.677c-0.592,0-1.184,0.225-1.635,0.676l-3.494,3.484   l7.639,7.626l3.494-3.483C56.639,15.998,56.639,14.535,55.736,13.636z' />
      <polygon points='21.922,35.396 29.562,43.023 50.607,22.017 42.967,14.39  ' />
      <polygon points='20.273,37.028 18.642,46.28 27.913,44.654  ' />
      <path d='M41.393,50.403H12.587V21.597h20.329l5.01-5H10.82c-1.779,0-3.234,1.455-3.234,3.234v32.339   c0,1.779,1.455,3.234,3.234,3.234h32.339c1.779,0,3.234-1.455,3.234-3.234V29.049l-5,4.991V50.403z' />
    </svg>
  );
}

export function BtnEdited() {
  return (
    <svg
      className='w-6 h-6  fill-green-500'
      version='1.1'
      id='Capa_1'
      x='0px'
      y='0px'
      width='106.048px'
      height='106.048px'
      viewBox='0 0 106.048 106.048'
    >
      <path
        d='M69.895,34.279l7.498,7.498L47.403,71.769l-18.75-18.745l7.498-7.498l11.247,11.247L69.895,34.279z
          M106.048,21.209v63.629c0,11.666-9.543,21.21-21.21,21.21H21.209C9.543,106.048,0,96.504,0,84.838V21.209
          C0,9.543,9.543,0,21.209,0h63.628C96.505,0,106.048,9.543,106.048,21.209z M92.792,53.023c0-21.968-17.803-39.768-39.769-39.768
          c-21.968,0-39.768,17.8-39.768,39.768c0,21.966,17.8,39.769,39.768,39.769C74.989,92.792,92.792,74.989,92.792,53.023z'
      />
    </svg>
  );
}
