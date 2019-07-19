class CommentsController < ApplicationController
  def index
    @comments = Comment.all.order(created_at: :desc)
    if params[:search] 
      @comments = Comment.where("content like ?", "%#{params[:search]}%")
      
    end
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.save!
    render json: @comment.as_json
  end










  private 
  
  def comment_params
    params.require(:comment).permit(:content)
  end
end
