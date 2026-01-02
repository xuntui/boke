import Link from "next/link"
import { Card } from "@/components/ui/card"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 lg:gap-12">
          {/* Main Content */}
          <main className="space-y-12">
            {/* Header */}
            <header className="border-b border-border pb-6">
              <h1 className="text-3xl font-bold tracking-tight text-foreground mb-2">我的笔记</h1>
              <p className="text-muted-foreground leading-relaxed">记录思考、分享阅读、探索生活的点滴</p>
            </header>

            {/* Popular Articles Section */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-foreground">被最多人点击的笔记：</h2>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-foreground hover:text-primary transition-colors underline decoration-1 underline-offset-4"
                  >
                    收集发人深省的话
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-foreground hover:text-primary transition-colors underline decoration-1 underline-offset-4"
                  >
                    我的短想法
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-foreground hover:text-primary transition-colors underline decoration-1 underline-offset-4"
                  >
                    收集一些给人灵感的东西
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-foreground hover:text-primary transition-colors underline decoration-1 underline-offset-4"
                  >
                    探索互联网上高质量的内容
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-foreground hover:text-primary transition-colors underline decoration-1 underline-offset-4"
                  >
                    读书笔记
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-foreground hover:text-primary transition-colors underline decoration-1 underline-offset-4"
                  >
                    最好用的工具集合
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-foreground hover:text-primary transition-colors underline decoration-1 underline-offset-4"
                  >
                    有意思的问题收集
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-foreground hover:text-primary transition-colors underline decoration-1 underline-offset-4"
                  >
                    收集值得阅读的文章
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-foreground hover:text-primary transition-colors underline decoration-1 underline-offset-4"
                  >
                    收集一些有意思的社区
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-foreground hover:text-primary transition-colors underline decoration-1 underline-offset-4"
                  >
                    英语学习相关资源
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-foreground hover:text-primary transition-colors underline decoration-1 underline-offset-4"
                  >
                    一种新的雇佣方案
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-foreground hover:text-primary transition-colors underline decoration-1 underline-offset-4"
                  >
                    我要是有钱
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-foreground hover:text-primary transition-colors underline decoration-1 underline-offset-4"
                  >
                    重新思考何为幸福的人生
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-foreground hover:text-primary transition-colors underline decoration-1 underline-offset-4"
                  >
                    刚社交网络，阅读文章以及读书的区别是什么？
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-foreground hover:text-primary transition-colors underline decoration-1 underline-offset-4"
                  >
                    伊斯兰教中的"叛教者"- 前穆斯林们
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-foreground hover:text-primary transition-colors underline decoration-1 underline-offset-4"
                  >
                    点击查看全部笔记
                  </Link>
                </li>
              </ul>
            </section>

            {/* Latest Short Thoughts */}
            <section>
              <h2 className="text-2xl font-semibold mb-6 text-foreground flex items-center gap-2">
                最新的短想法：
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </Link>
              </h2>
              <Card className="bg-muted/50 p-6 border-border">
                <p className="text-foreground leading-relaxed">老梁的这两期湾区演讲(上)、下集 看了是真带劲。</p>
              </Card>
            </section>
          </main>

          {/* Sidebar */}
          <aside className="space-y-8">
            {/* Important Links */}
            <section>
              <h3 className="text-xl font-semibold mb-4 text-foreground">重要链接</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    RSS 订阅地址
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    Twitter 主页
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    即刻主页
                  </Link>
                </li>
              </ul>
            </section>

            {/* About Section */}
            <section>
              <h3 className="text-xl font-semibold mb-4 text-foreground">关于</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    关于我
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    现在在做的事
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    博客更新日志
                  </Link>
                </li>
              </ul>
            </section>

            {/* Navigation */}
            <section>
              <h3 className="text-xl font-semibold mb-4 text-foreground">导航</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    搜索本站
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    图书阅读资源
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    探索互联网上高质量的内容
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    读书笔记
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    短想法
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    收集发人深省的话
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    每日阅读分享
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    英文文章
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    所有文章存档
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    本站源码
                  </Link>
                </li>
              </ul>
            </section>

            {/* Where Am I Online */}
            <section>
              <h3 className="text-xl font-semibold mb-4 text-foreground">我在网诸什么？</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                探索我在互联网上的足迹，包括社交媒体、开源项目和个人作品。
              </p>
            </section>
          </aside>
        </div>
      </div>
    </div>
  )
}
