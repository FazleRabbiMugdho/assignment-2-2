// PaginationComponent.js
import React from "react";
import { Pagination } from "antd";

export default function PaginationComponent({ total, pageSize, current, onChange }) {
  return (
    <div style={{ 
      display: "flex", 
      justifyContent: "center", 
      marginTop: 24,
      padding: "12px 0"
    }}>
      <Pagination
        total={total}
        pageSize={pageSize}
        current={current}
        onChange={onChange}
        showSizeChanger={false}
        showQuickJumper
        showTotal={(total, range) => 
          `${range[0]}-${range[1]} of ${total} items`
        }
      />
    </div>
  );
}