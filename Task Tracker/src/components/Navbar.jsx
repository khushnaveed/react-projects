import React from "react";

export default function Navbar() {
  return (
    <div>
      <ul class="nav nav-tabs nav-fill">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">
            Monday
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Tuesday
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Wednesday
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-disabled="true">
            Thursday
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-disabled="true">
            Friday
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-disabled="true">
            Saturday
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-disabled="true">
            Sunday
          </a>
        </li>
      </ul>
    </div>
  );
}
