<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
    xmlns:html="http://www.w3.org/TR/REC-html40"
    xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
    <xsl:template match="/">
        <html xmlns="http://www.w3.org/1999/xhtml">
            <head>
                <title>XML Sitemap - Av. Işıl Bengisu Akpınar</title>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <style type="text/css">
                    body {
                        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
                        margin: 0;
                        background: #f8fafc;
                        color: #1e293b;
                        line-height: 1.6;
                    }
                    .container {
                        max-width: 1200px;
                        margin: 0 auto;
                        padding: 20px;
                    }
                    .header {
                        background: #1e3a8a;
                        color: white;
                        padding: 40px 20px;
                        text-align: center;
                        margin-bottom: 30px;
                        border-radius: 12px;
                    }
                    .header h1 {
                        margin: 0;
                        font-size: 2.5rem;
                        font-weight: 700;
                    }
                    .header p {
                        margin: 10px 0 0 0;
                        opacity: 0.9;
                        font-size: 1.1rem;
                    }
                    .stats {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                        gap: 20px;
                        margin-bottom: 30px;
                    }
                    .stat-card {
                        background: white;
                        padding: 20px;
                        border-radius: 12px;
                        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                        text-align: center;
                    }
                    .stat-number {
                        font-size: 2rem;
                        font-weight: 700;
                        color: #1e3a8a;
                        margin-bottom: 5px;
                    }
                    .stat-label {
                        color: #64748b;
                        font-size: 0.9rem;
                    }
                    .sitemap-table {
                        background: white;
                        border-radius: 12px;
                        overflow: hidden;
                        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
                    }
                    .table-header {
                        background: #f1f5f9;
                        padding: 15px 20px;
                        border-bottom: 1px solid #e2e8f0;
                    }
                    .table-header h2 {
                        margin: 0;
                        color: #1e293b;
                        font-size: 1.25rem;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                    }
                    th, td {
                        padding: 12px 20px;
                        text-align: left;
                        border-bottom: 1px solid #f1f5f9;
                    }
                    th {
                        background: #f8fafc;
                        color: #475569;
                        font-weight: 600;
                        font-size: 0.875rem;
                        text-transform: uppercase;
                        letter-spacing: 0.025em;
                    }
                    td {
                        color: #1e293b;
                    }
                    .url-cell {
                        max-width: 400px;
                        word-break: break-all;
                    }
                    .url-cell a {
                        color: #1e3a8a;
                        text-decoration: none;
                    }
                    .url-cell a:hover {
                        text-decoration: underline;
                    }
                    .priority-high { color: #dc2626; font-weight: 600; }
                    .priority-medium { color: #f59e0b; font-weight: 600; }
                    .priority-low { color: #64748b; }
                    .footer {
                        text-align: center;
                        margin-top: 40px;
                        color: #64748b;
                        font-size: 0.875rem;
                    }
                    @media (max-width: 768px) {
                        .container { padding: 10px; }
                        .header h1 { font-size: 2rem; }
                        th, td { padding: 8px 12px; font-size: 0.875rem; }
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>XML Sitemap</h1>
                        <p>Av. Işıl Bengisu Akpınar Hukuk Bürosu</p>
                    </div>
                    
                    <div class="stats">
                        <div class="stat-card">
                            <div class="stat-number"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></div>
                            <div class="stat-label">Toplam Sayfa</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number"><xsl:value-of select="count(sitemap:urlset/sitemap:url[sitemap:priority >= 0.8])"/></div>
                            <div class="stat-label">Yüksek Öncelik</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-number"><xsl:value-of select="count(sitemap:urlset/sitemap:url[contains(sitemap:loc, '/blog/')])"/></div>
                            <div class="stat-label">Blog Yazıları</div>
                        </div>
                    </div>
                    
                    <div class="sitemap-table">
                        <div class="table-header">
                            <h2>Site Haritası</h2>
                        </div>
                        <table>
                            <thead>
                                <tr>
                                    <th>URL</th>
                                    <th>Son Güncelleme</th>
                                    <th>Güncelleme Sıklığı</th>
                                    <th>Öncelik</th>
                                </tr>
                            </thead>
                            <tbody>
                                <xsl:for-each select="sitemap:urlset/sitemap:url">
                                    <tr>
                                        <td class="url-cell">
                                            <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                                        </td>
                                        <td>
                                            <xsl:value-of select="substring(sitemap:lastmod, 1, 10)"/>
                                        </td>
                                        <td>
                                            <xsl:value-of select="sitemap:changefreq"/>
                                        </td>
                                        <td>
                                            <xsl:choose>
                                                <xsl:when test="sitemap:priority >= 0.8">
                                                    <span class="priority-high"><xsl:value-of select="sitemap:priority"/></span>
                                                </xsl:when>
                                                <xsl:when test="sitemap:priority >= 0.5">
                                                    <span class="priority-medium"><xsl:value-of select="sitemap:priority"/></span>
                                                </xsl:when>
                                                <xsl:otherwise>
                                                    <span class="priority-low"><xsl:value-of select="sitemap:priority"/></span>
                                                </xsl:otherwise>
                                            </xsl:choose>
                                        </td>
                                    </tr>
                                </xsl:for-each>
                            </tbody>
                        </table>
                    </div>
                    
                    <div class="footer">
                        <p>Bu sitemap arama motorları için optimize edilmiştir.</p>
                        <p>Son güncelleme: <xsl:value-of select="format-date(current-date(), '[D] [MNn] [Y]')"/></p>
                    </div>
                </div>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
