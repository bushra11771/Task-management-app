import React from 'react'
import { Link } from "react-router-dom";
import { BsListTask } from "react-icons/bs";


function Header() {
  return (
    <div>
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link
              href="#"
              className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
            >
              <BsListTask />
              Tasks
            </Link>
          </li>
        </ol>
      </nav>

    </div>
  )
}

export default Header
