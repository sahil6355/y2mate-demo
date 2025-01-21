import React from 'react'

const SeachContainer = () => {
  return (
     <div className="search">
              <div className="main_search">
                <h1>Y2Meta - YouTube Downloader</h1>
                <p>Download YouTube videos seamlessly in 1080p with Y2meta</p>
                <div className="search_box">
                  <form
                    className="main_seacrh_box"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="img search-icon"></div>
                    <input
                      type="text"
                      name="url"
                      id="url"
                      autoComplete="off"
                      placeholder="Search or paste YouTube link here"
                      value={searchText}
                      onChange={handleInputChange}
                    />
                    <button className="submit" id="submit-btn">
                      Start
                    </button>
                  </form>
                </div>
                {suggestions?.map?.((suggestion, index) => (
                  <div
                    key={index}
                    className="suggestion-item"
                    onClick={() => handleSuggestionClick(suggestion)}
                    style={{
                      padding: "8px",
                      cursor: "pointer",
                      borderBottom: "1px solid #eee",
                      backgroundColor: "#fff",
                      color: "#333",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "#f0f0f0")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "#fff")
                    }
                  >
                    {suggestion}
                  </div>
                ))}
                <p className="terms">
                  By using our service you are accepting our{" "}
                  <Link to="/" aria-label="terms and conditions">
                    Term and Conditions.
                  </Link>
                </p>
              </div>
            </div>
  )
}

export default SeachContainer