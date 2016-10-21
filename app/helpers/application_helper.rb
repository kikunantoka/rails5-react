module ApplicationHelper
  def css_load_tag(file_name)
    stylesheet_link_tag assets_path("#{file_name}.css") if Rails.env.production?
  end
  def assets_path(path)
    return "http://localhost:8080/#{path}" if Rails.env.development?
    manifest = Rails.application.config.assets_manifest
    path = manifest[path] if manifest && manifest[path].present?
    "/assets/#{path}"
  end
end
