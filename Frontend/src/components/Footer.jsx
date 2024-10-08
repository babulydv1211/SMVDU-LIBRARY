import React from 'react'

function Footer() {
  return (
    <div className="mt-12">
        <hr/>
      <footer className="footer footer-center  text-base-content rounded p-10 dark:bg-slate-900 dark:text-white">
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <a href="https://github.com/babulydv1211">
         {/* <svg
          // xmlns="http://www.w3.org/2000/svg"
           xmlns="https://imgs.search.brave.com/lrACxf3gfpF50I9XDiOwqHHTtC686YbwIHXvfT2Rlx8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93Mi51/bmlzYS5hYy56YS9D/Vy9XSUtJUEVESS9D/T01NT05TL1RIVU1C/LzkvOTEvT0NUSUNP/TlNfU1ZHLzYwMFBY/X09DLlBORz8yMDE4/MDgwNjE3MDcxNQ"

          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current text-blue-600">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>  */}
        <div className="w-6 h-6 dark:bg-slate-900 dark:bg-white"> 
          <img src=" https://imgs.search.brave.com/lrACxf3gfpF50I9XDiOwqHHTtC686YbwIHXvfT2Rlx8/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93Mi51/bmlzYS5hYy56YS9D/Vy9XSUtJUEVESS9D/T01NT05TL1RIVU1C/LzkvOTEvT0NUSUNP/TlNfU1ZHLzYwMFBY/X09DLlBORz8yMDE4/MDgwNjE3MDcxNQ"/>
        </div>
         
      </a>
      <a href="https://www.youtube.com/channel/UC81WnmsVEjdN2Q2x7e0A_Iw">
         <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
          viewBox="0 0 26 26"
          className="fill-current text-red-600">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg> 
        {/* <div className="w-10 h-12 overflow-hidden"> 
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxCvMSKJiJbGC5EUbdsCkxiRY6FLr0nX2wcQ&s "/>
        </div> */}
      </a>
      <a href="https://www.facebook.com/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          className="fill-current text-blue-600">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
      <a href="https://instagram.com/babul20035?igshid=ZDdkNTZiNTM=">
        <div className="w-8 h-8 rounded-full">
     <img src="https://img.freepik.com/premium-photo/instagram-logo-vector-icon-white-background_1304128-4555.jpg?size=338&ext=jpg&ga=GA1.1.1819120589.1727740800&semt=ais_hybrid"/>
        </div>
      </a>
    </div>
  </nav>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved by Babul kumar</p>
  </aside>
</footer>
    </div>
  )
}

export default Footer
