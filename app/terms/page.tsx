import type { Metadata } from "next";
import { LegalShell } from "../legal/LegalShell";

export const metadata: Metadata = {
  title: "Terms of Service — Persimmon",
  description: "Terms for downloading and using the Persimmon EPUB reader.",
};

export default function TermsPage() {
  return (
    <LegalShell
      title="Terms of Service"
      subtitle="服务条款"
      lastUpdated="August 11, 2026"
    >
      <section className="legal-document" lang="zh-Hans">
        <h2>中文</h2>
        <p>下载或使用 Persimmon，即表示你同意以下条款。如果你不同意，请不要使用本 App。</p>

        <h3>使用许可</h3>
        <p>
          Persimmon 授予你一项有限的、非独占、不可转让且可撤销的许可，允许你为个人阅读目的
          安装和使用 App。你不得冒充官方版本、恶意修改或利用 App 侵犯他人权利。
        </p>

        <h3>你的书籍与内容</h3>
        <p>
          你保留自己导入内容的权利，也有责任确保有权保存和阅读这些内容。Persimmon
          不提供电子书，不主张对你导入的 EPUB 拥有所有权，也不得用于规避数字版权保护或传播侵权内容。
        </p>

        <h3>Google Drive 与第三方服务</h3>
        <p>
          Google Drive 同步是可选功能，受 Google 的条款和政策约束。字体下载、邮件和系统分享功能
          也可能连接第三方服务。Persimmon 无法控制这些服务的持续可用性或其独立政策。
        </p>

        <h3>更新与可用性</h3>
        <p>
          我们可能改进、修改或停止部分功能，并可能要求更新以保持兼容性、安全性或同步能力。
          在适用法律允许的范围内，App 按“现状”和“可用状态”提供，不保证永不中断或完全无误。
        </p>

        <h3>责任限制</h3>
        <p>
          请保留重要 EPUB 和数据的独立备份。在适用法律允许的最大范围内，Persimmon
          对因使用或无法使用 App、设备故障、第三方服务或数据丢失造成的间接或后果性损失不承担责任。
          本条款不排除法律不得排除的权利或责任。
        </p>

        <h3>平台条款</h3>
        <p>
          通过 Apple App Store 或 Google Play 获得 App 时，相应平台条款也同时适用；如强制性平台条款
          与本条款冲突，以该平台条款为准。直接下载 APK 时，请仅使用 Persimmon 官方提供的签名版本。
        </p>

        <h3>变更与联系</h3>
        <p>
          条款发生实质变化时会更新本页日期。问题请联系
          <a href="mailto:support@persimmon.cc">support@persimmon.cc</a>。
        </p>
      </section>

      <section className="legal-document" lang="en">
        <h2>English</h2>
        <p>By downloading or using Persimmon, you agree to these terms. If you do not agree, do not use the app.</p>

        <h3>License to use Persimmon</h3>
        <p>
          Persimmon grants you a limited, non-exclusive, non-transferable, revocable license to install
          and use the app for personal reading. You may not impersonate an official build, modify the app
          maliciously, or use it to violate another person&apos;s rights.
        </p>

        <h3>Your books and content</h3>
        <p>
          You retain rights to content you import and are responsible for having the right to store and read it.
          Persimmon does not supply ebooks, claim ownership of imported EPUB files, or authorize circumvention
          of digital rights protection or distribution of infringing content.
        </p>

        <h3>Google Drive and third-party services</h3>
        <p>
          Google Drive sync is optional and is also governed by Google&apos;s terms and policies. Font downloads,
          email, and system sharing may connect to third-party services. Persimmon does not control the continued
          availability or independent policies of those services.
        </p>

        <h3>Updates and availability</h3>
        <p>
          We may improve, change, or discontinue features, and updates may be required for compatibility,
          security, or sync. To the extent permitted by law, the app is provided “as is” and “as available”
          without a promise that it will always be uninterrupted or error-free.
        </p>

        <h3>Limitation of liability</h3>
        <p>
          Keep independent backups of important EPUB files and data. To the fullest extent permitted by law,
          Persimmon is not liable for indirect or consequential loss arising from use or inability to use the app,
          device failure, third-party services, or data loss. Nothing here excludes rights or liability that law
          does not allow to be excluded.
        </p>

        <h3>Platform terms</h3>
        <p>
          If you obtain Persimmon through the Apple App Store or Google Play, the applicable platform terms also
          apply and control where mandatory platform terms conflict with these terms. For direct APK downloads,
          use only official signed builds provided by Persimmon.
        </p>

        <h3>Changes and contact</h3>
        <p>
          Material changes will be reflected by the date on this page. Questions may be sent to
          <a href="mailto:support@persimmon.cc">support@persimmon.cc</a>.
        </p>
      </section>
    </LegalShell>
  );
}
