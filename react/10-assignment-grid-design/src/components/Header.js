import "./Header.css"

function Header() {
  return (
    <header>
      <div class="logo">
        <h1><strong>EDYODA</strong></h1>
        <p>Stories</p>
      </div>
      <div class="dropdown_list">
        <label for="dropdown_list">Explore Catagories</label>
        <select name="Dropdown" id="dropdown">
          <option value=""> </option>
          <option value="Artificial Intelligence">
            Artificial Intelligence
          </option>
          <option value="Cloud Computing">Cloud Computing</option>
          <option value="DevOps">DevOps</option>
          <option value="Programming Languages">Programming Languages</option>
          <option value="Mobile Application Development">
            Mobile Application Development
          </option>
          <option value="Technology and Tools">Technology and Tools</option>
          <option value="Get a Job in a Tech Company">
            Get a Job in a Tech Company
          </option>
          <option value="Others">Others</option>
        </select>
      </div>
    </header>
  )
}

export default Header;