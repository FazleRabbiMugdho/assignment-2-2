// Articles.js
import React, { useState } from "react";
import { Table, Badge, Tag, Tooltip, Card } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import PaginationComponent from "./PaginationComponent";

const articlesData = [
  {
    key: "1",
    title: "The Art of Storytelling: A Guide to Captivating Your Audience",
    status: "Published",
    lastEdited: "2 days ago",
    tags: ["Writing", "Creativity"],
    views: 1245
  },
  {
    key: "2",
    title: "Crafting Compelling Characters: A Step-by-Step Approach",
    status: "Draft",
    lastEdited: "1 week ago",
    tags: ["Fiction", "Characters"],
    views: 0
  },
  {
    key: "3",
    title: "Mastering Dialogue in Fiction: Techniques for Realistic Conversations",
    status: "Published",
    lastEdited: "2 weeks ago",
    tags: ["Dialogue", "Realism"],
    views: 876
  },
  {
    key: "4",
    title: "Building Immersive Worlds: The Art of Worldbuilding",
    status: "Published",
    lastEdited: "3 weeks ago",
    tags: ["Worldbuilding", "Fantasy"],
    views: 1532
  },
  {
    key: "5",
    title: "Writing for the Web: Engaging Readers in the Digital Age",
    status: "Draft",
    lastEdited: "1 month ago",
    tags: ["Web Writing", "SEO"],
    views: 0
  },
  {
    key: "6",
    title: "The Power of Revision: Transforming Good Writing into Great Writing",
    status: "Published",
    lastEdited: "1 month ago",
    tags: ["Editing", "Process"],
    views: 987
  },
  {
    key: "7",
    title: "Finding Your Voice: Developing a Unique Writing Style",
    status: "Published",
    lastEdited: "2 months ago",
    tags: ["Style", "Voice"],
    views: 2104
  },
  {
    key: "8",
    title: "Overcoming Writer's Block: Strategies for Creativity",
    status: "Draft",
    lastEdited: "2 months ago",
    tags: ["Creativity", "Process"],
    views: 0
  },
];

export default function Articles() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text) => (
        <Tooltip title={text}>
          <span style={{ fontWeight: "bold", color: "#1f2a40" }}>{text}</span>
        </Tooltip>
      ),
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      render: (tags) => (
        <div>
          {tags.map((tag) => (
            <Tag 
              color="geekblue" 
              key={tag}
              style={{ marginBottom: 4 }}
            >
              {tag}
            </Tag>
          ))}
        </div>
      ),
    },
    {
      title: "Views",
      dataIndex: "views",
      key: "views",
      render: (views) => (
        <div style={{ display: "flex", alignItems: "center" }}>
          <EyeOutlined style={{ marginRight: 4, color: "#888" }} />
          {views}
        </div>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Badge
          count={status}
          style={{
            backgroundColor: status === "Published" ? "#52c41a" : "#faad14",
            fontWeight: 500
          }}
        />
      ),
    },
    {
      title: "Last Edited",
      dataIndex: "lastEdited",
      key: "lastEdited",
    },
  ];

  const paginatedData = articlesData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div>
      <Card
        title="My Articles"
        style={{ borderRadius: 12, boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
      >
        <Table
          dataSource={paginatedData}
          columns={columns}
          pagination={false}
          bordered={false}
          style={{ border: "1px solid #f0f0f0", borderRadius: 8 }}
        />
        <PaginationComponent
          total={articlesData.length}
          pageSize={pageSize}
          current={currentPage}
          onChange={(page) => setCurrentPage(page)}
        />
      </Card>
    </div>
  );
}