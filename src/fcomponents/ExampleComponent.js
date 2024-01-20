import axios from "axios";
import React, { useState, useEffect } from "react";

const ExampleComponent = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const { data } = await axios.get("https://api.github.com/repositories");
        setRepos(data);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };
    loadData();
  }, [repos]);
  const repoWithId4 = repos.filter((repo) => repo.id === 4)[0] || null;

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>GitHub Repositories</h1>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "20px" }}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={tableHeaderStyle}>Name</th>
            <th style={tableHeaderStyle}>Description</th>
            <th style={tableHeaderStyle}>Node ID</th>
            <th style={tableHeaderStyle}>Login</th>
          </tr>
        </thead>
        <tbody>
        
          {repos.map((repo) => (
            <tr key={repo.id}>
              <td style={tableCellStyle}>{repo.name}</td>
              <td style={tableCellStyle}>{repo.description}</td>
              <td style={tableCellStyle}>{repo.node_id}</td>
              <td style={tableCellStyle}>
                <a href={repo.owner.login} target="_blank" rel="noopener noreferrer" style={{ color: "#0366d6" }}>
                  {repo.owner.login}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const tableHeaderStyle = {
  padding: "12px",
  borderBottom: "1px solid #ddd",
};

const tableCellStyle = {
  padding: "10px",
  borderBottom: "1px solid #ddd",
};

export default ExampleComponent;
