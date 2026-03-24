#!/bin/bash

API="http://localhost:8787"

echo "=== 测试审计日志系统 ==="

# 1. 获取系统列表
echo -e "\n1. 获取系统列表:"
curl -s "$API/api/admin/audit-systems" | jq .

# 2. 获取操作类型列表
echo -e "\n2. 获取操作类型列表:"
curl -s "$API/api/admin/operation-types" | jq .

# 3. 获取实时监控数据
echo -e "\n3. 获取实时监控数据:"
curl -s "$API/api/admin/audit-realtime" | jq .

# 4. 搜索客户
echo -e "\n4. 搜索客户:"
curl -s "$API/api/admin/customers/search?q=admin" | jq .

echo -e "\n=== 测试完成 ==="
