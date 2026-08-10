import type { Metadata } from "next";
import { LegalShell } from "../legal/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy — Persimmon",
  description: "How Persimmon handles local reading data and optional Google Drive sync.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy"
      subtitle="隐私政策"
      lastUpdated="August 11, 2026"
    >
      <section className="legal-document" lang="zh-Hans">
        <h2>中文</h2>
        <p>
          Persimmon（柿子阅读）是一款本地优先的 EPUB 阅读器。本政策说明 App
          如何处理你主动提供的文件、阅读数据和可选的 Google Drive 数据。
        </p>

        <h3>我们不做什么</h3>
        <ul>
          <li>不提供 Persimmon 自有账号；</li>
          <li>不集成广告、行为分析、跨 App 跟踪或营销 SDK；</li>
          <li>不出售个人信息，也不把阅读内容用于广告或训练模型。</li>
        </ul>

        <h3>本机数据</h3>
        <p>
          你选择导入的 EPUB、封面、章节资源、阅读进度、阅读设置，以及下载或导入的字体，
          都保存在设备的 App 私有目录中。Persimmon 只读取你通过系统文件选择器明确选择的文件。
        </p>

        <h3>可选的 Google Drive 同步</h3>
        <p>
          只有在你主动连接 Google Drive 后，Persimmon 才会申请
          <code>drive.appdata</code> 权限。它只能访问 Google Drive 为 Persimmon
          提供的隐藏 <code>appDataFolder</code>，不能读取或修改普通 Drive 中可见的文件。
        </p>
        <p>
          同步内容包括原始 EPUB、书籍元数据、稳定阅读位置、显示进度、删除状态、随机设备标识，
          以及同步所需的账户标识。Google 也可能提供账户显示名称或邮箱，用于显示当前连接账户。
          Persimmon 仅将 Google 用户数据用于提供用户主动启用的同步功能，并遵守 Google API
          Services User Data Policy，包括 Limited Use 要求。
        </p>

        <h3>网络、共享与安全</h3>
        <p>
          Drive 同步连接 Google API；可选字体下载连接固定的 GitHub 地址；“发送反馈”只有在你确认后
          才会把预填内容交给你选择的邮件或分享服务。Persimmon 不经营用于保存阅读内容的服务器。
          网络传输使用 HTTPS，本机数据由操作系统 App 沙盒保护，Google 授权信息由 Google SDK
          与平台安全机制管理。
        </p>

        <h3>保留与删除</h3>
        <ul>
          <li>删除单本书会删除本机资源；连接同步时，删除状态会同步到其他设备。</li>
          <li>“清空本机数据”会删除本机书库、进度、设置与字体，并断开 Drive；云端副本保留。</li>
          <li>“清空 Google Drive 数据”会删除隐藏目录中的 EPUB 与同步记录；本机副本保留。</li>
          <li>卸载 App 会删除本机数据；如需删除云端副本，请在卸载前使用 App 内的清除功能。</li>
        </ul>

        <h3>联系与变更</h3>
        <p>
          隐私问题请联系 <a href="mailto:support@persimmon.cc">support@persimmon.cc</a>。
          政策发生实质变化时，Persimmon 会更新本页日期，并在适当情况下通过 App 告知用户。
        </p>
      </section>

      <section className="legal-document" lang="en">
        <h2>English</h2>
        <p>
          Persimmon is a local-first EPUB reader. This policy explains how the app handles files,
          reading data, and optional Google Drive data that you choose to provide.
        </p>

        <h3>What we do not do</h3>
        <ul>
          <li>Persimmon does not provide its own user account.</li>
          <li>The app contains no advertising, behavioral analytics, cross-app tracking, or marketing SDKs.</li>
          <li>We do not sell personal information or use reading content for advertising or model training.</li>
        </ul>

        <h3>Data on your device</h3>
        <p>
          EPUB files you select, covers, generated book resources, reading progress, reading settings,
          and fonts you download or import are stored in the app&apos;s private storage. Persimmon reads
          only files you explicitly select through the system file picker.
        </p>

        <h3>Optional Google Drive sync</h3>
        <p>
          Persimmon requests the <code>drive.appdata</code> scope only after you choose to connect
          Google Drive. It can access only Persimmon&apos;s hidden <code>appDataFolder</code> and cannot
          read or modify files visible in your regular Drive.
        </p>
        <p>
          Synced data includes original EPUB files, book metadata, stable reading locations, display
          progress, deletion records, a random device identifier, and the account identifier needed
          for sync. Google may also provide an account display name or email so the app can identify
          the connected account. Persimmon uses Google user data only to provide the user-facing sync
          feature and follows the Google API Services User Data Policy, including Limited Use requirements.
        </p>

        <h3>Network access, sharing, and security</h3>
        <p>
          Drive sync connects to Google APIs; optional font downloads connect to fixed GitHub URLs;
          Send Feedback passes prefilled content to an email or sharing service only after you confirm.
          Persimmon does not operate a server that stores your reading content. Network transfers use
          HTTPS, local data is protected by the operating system&apos;s app sandbox, and Google authorization
          information is managed by Google&apos;s SDK and platform security facilities.
        </p>

        <h3>Retention and deletion</h3>
        <ul>
          <li>Deleting one book removes its local resources; while sync is connected, the deletion propagates.</li>
          <li>Clear Local Data removes the local library, progress, settings, and fonts, then disconnects Drive; cloud copies remain.</li>
          <li>Clear Google Drive Data removes EPUB and sync records from the hidden Drive folder; local copies remain.</li>
          <li>Uninstalling removes local app data. Use the in-app cloud deletion action before uninstalling to remove cloud copies.</li>
        </ul>

        <h3>Contact and changes</h3>
        <p>
          For privacy questions, contact <a href="mailto:support@persimmon.cc">support@persimmon.cc</a>.
          Material changes will be reflected by the date on this page and, where appropriate, communicated in the app.
        </p>
      </section>
    </LegalShell>
  );
}
