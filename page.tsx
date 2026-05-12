import { Pencil } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Layout from "./layout"

export default function Page() {
  return (
    <Layout>
      <div className="grid gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-base font-medium">Customer Data</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Gender</span>
                <span>Male</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Date of Birth</span>
                <span>539.7.20</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Customer ID</span>
                <span>6490101</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Customer Status</span>
                <span>50200021</span>
              </div>
              <div className="flex justify-between col-span-2">
                <span className="text-gray-600">住所</span>
                <span>シンカポレシンガポ1111-111 🏳️</span>
              </div>
              <div className="flex justify-between col-span-2">
                <span className="text-gray-600">氏名</span>
                <span>新宿店／シンガ花子</span>
              </div>
              <div className="flex justify-between col-span-2">
                <span className="text-gray-600">電話番号</span>
                <span>090-4641-0517／090-1111-5555</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-medium">契約取引一覧表</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-2">
                <Select defaultValue="2021-12">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2021-12">2021年12月</SelectItem>
                    <SelectItem value="2022-01">2022年1月</SelectItem>
                    <SelectItem value="2022-02">2022年2月</SelectItem>
                  </SelectContent>
                </Select>
                <span>～</span>
                <Select defaultValue="2022-02">
                  <SelectTrigger className="w-[120px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2022-01">2022年1月</SelectItem>
                    <SelectItem value="2022-02">2022年2月</SelectItem>
                    <SelectItem value="2022-03">2022年3月</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="border rounded-lg">
                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 p-3 hover:bg-gray-50">
                  <span className="px-2 py-1 text-xs bg-gray-200 rounded">既読</span>
                  <div>
                    <div className="text-sm font-medium">明日の件その他相談【報告等】</div>
                    <div className="text-xs text-gray-500">2022-02-18 14:09:54</div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Pencil className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 p-3 hover:bg-gray-50 border-t">
                  <span className="px-2 py-1 text-xs bg-gray-200 rounded">既読</span>
                  <div>
                    <div className="text-sm font-medium">本店送りました。よろしくです。【報告等】</div>
                    <div className="text-xs text-gray-500">2022-02-18 12:47:08</div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Pencil className="h-4 w-4" />
                  </Button>
                </div>
                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4 p-3 hover:bg-gray-50 border-t">
                  <span className="px-2 py-1 text-xs bg-gray-200 rounded">既読</span>
                  <div>
                    <div className="text-sm font-medium">明日の件その相談【訪問】</div>
                    <div className="text-xs text-gray-500">2022-02-18 11:27:54</div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Pencil className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}
