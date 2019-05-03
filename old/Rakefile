task :install do |t|
    system('bundle install')
end

task :combine_mds do |t|
    system('rm -rf source/index.html.md')
    system('cat source/*.md > source/index.html.md')
end

task run: [:install, :combine_mds] do |t|
    system('bundle exec middleman serve')
end

task build: [:install, :combine_mds] do |t|
    system('bundle exec middleman build --clean')
end