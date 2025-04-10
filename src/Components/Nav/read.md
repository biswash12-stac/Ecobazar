    <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl relative left-[40rem] text-black font-bold"
        >

          {open ? "✖" : "☰"}
        </button>

        {/* Mobile Menu */}
        {open && (
          <div className="absolute top-50 right-4  bg-white shadow-lg w-[200px] px-4 py-2 rounded-md">

            <ul className="flex flex-col gap-4 text-black font-bold text-lg">
              <li className="focus:text-red-300 active:text-red-400">Home</li>
              <li className="hover:text-gray-500">Shop</li>
              <li className="hover:text-gray-500">Page</li>
              <li className="hover:text-gray-500">Blog</li>
              <li className="hover:text-gray-500">About Us</li>
              <li className="hover:text-gray-500">Contact Us</li>
            </ul>
          </div>
        )}